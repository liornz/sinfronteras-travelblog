import { useState, useContext, useEffect, useCallback } from 'react';
import NewComment from './new-comment';
import CommentList from './comments-list';
import NotificationContext from '../../context/notification-context';
import styles from './comments.module.scss';
import { commentData, enteredCommentData } from '../../lib/types';
import { useTranslation } from 'next-i18next';


interface Props {
  destinationSlug: string;
  countrySlug: string;
}

const Comments: React.FC<Props> = (props) => {
  const { destinationSlug, countrySlug } = props;
  const [comments, setComments] = useState<commentData[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const notificationCtx = useContext(NotificationContext);
   const { t } = useTranslation('comments');

  const getComments = useCallback(async () => {
    setIsLoadingComments(true);
    try {
      const response = await fetch(
        `/api/comments/${countrySlug}/${destinationSlug}`
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments);
        setIsLoadingComments(false);
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Error getting comment list!');
      }
    } catch (error) {
      setIsLoadingComments(false);
      if (error instanceof Error) {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Error loading comments',
          status: 'error',
        });
      }
    }
  }, [countrySlug, destinationSlug, notificationCtx]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  function addCommentHandler(commentData: enteredCommentData) {
    const sendCommentDataToAPI = async () => {
      try {
        const response = await fetch(
          '/api/comments/' + countrySlug + '/' + destinationSlug,
          {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          notificationCtx.showNotification({
            title: 'Success!',
            message: data.message || 'Successfully entered your comment',
            status: 'success',
          });
        } else {
          const data = await response.json();
          throw new Error(data.message || 'Something went wrong!');
        }
      } catch (error) {
        if (error instanceof Error) {
          notificationCtx.showNotification({
            title: 'Error!',
            message: error.message || 'Error saving comment',
            status: 'error',
          });
        }
      }
    };
    notificationCtx.showNotification({
      title: 'Saving comment',
      message: 'Storing your comment on the database...',
      status: 'pending',
    });
    sendCommentDataToAPI();
    getComments();
  }

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <h3 className={styles.title}>
          {t('title')}
        </h3>
        <NewComment onAddComment={addCommentHandler} />
        <CommentList comments={comments} isLoading={isLoadingComments} />
      </div>
    </div>
  );
};

export default Comments;
