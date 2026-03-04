function Reviews({ reviews }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Customer Reviews</h3>

      {reviews.map((review, index) => (
        <div key={index} style={styles.review}>
          <div>⭐ {review.rating}</div>

          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  review: {
    borderTop: "1px solid #eee",
    paddingTop: "10px",
    marginTop: "10px"
  }
};

export default Reviews;