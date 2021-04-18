import { Fragment } from 'react';
import { commentData } from '../../lib/types';
import styles from './comments-list.module.scss';

interface Props {
  comments: commentData[],
  isLoading: boolean
}

const CommentsList: React.FC<Props> = (props) => {
const { comments, isLoading } = props;
  return (
    <Fragment>
      <p>{isLoading ? 'Loading Comments' : 'Comments'}</p>
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