import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../../components/ui/spinner';
import { commentData } from '../../lib/types';
import styles from './comments-list.module.scss';

interface Props {
  comments: commentData[];
  isLoading: boolean;
}

const CommentsList: React.FC<Props> = (props) => {
  const { comments, isLoading } = props;
  const locale = useRouter().locale;
  function title() {
    if (comments.length === 0) {
      return null;
    }
    if (isLoading) {
      return <Spinner />;
    } else return <p>{locale === 'en-US' ? 'Comments' : 'Commentarios'}</p>
  }
  return (
    <Fragment>
      <div className={styles.title}>
        {title()}
      </div>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment._id} className={styles.comment}>
            <div>
              <p className={styles.name}>
                <strong>{comment.name}</strong>
              </p>
              <p className={styles.email}>{comment.email}</p>
            </div>
            <p className={styles.text}>{comment.text}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default CommentsList;
