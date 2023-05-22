import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from '../../services/fetchMovies';
import { ListItem, StyledList, ReviewsDescr } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const Reviews = await getReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>No Reviews.</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <ReviewsDescr className='description'>{content}</ReviewsDescr>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default Reviews;