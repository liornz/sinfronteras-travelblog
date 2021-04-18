import { useState, useContext, useEffect } from 'react';
import NewComment from './new-comment';
import CommentList from './comments-list';
import NotificationContext from '../../context/notification-context';
import styles from './comments.module.scss';
import { commentData, enteredCommentData } from '../../lib/types';

interface Props {
  destinationSlug: string;
}

const Comments: React.FC<Props> = (props) => {
  const { destinationSlug } = props;
  const [comments, setComments] = useState<commentData[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    setIsLoadingComments(true);
    try {
      const response = await fetch(`/api/comments/${destinationSlug}`);
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
      notificationCtx.showNotification({
        title: 'Error!',
        message: error.message || 'Error loading comments',
        status: 'error',
      });
    }
  };

  function addCommentHandler(commentData: enteredCommentData) {
    // send data to API
    const sendCommentDataToAPI = async () => {
      try {
        const response = await fetch('/api/comments/' + destinationSlug, {
          method: 'POST',
          body: JSON.stringify(commentData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
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
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Error saving comment',
          status: 'error',
        });
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
    <div className={styles.comments}>
      <NewComment onAddComment={addCommentHandler} />
      <CommentList comments={comments} isLoading={isLoadingComments} />
    </div>
  );
};

export default Comments;
