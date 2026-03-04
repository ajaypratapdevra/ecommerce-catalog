function VariantList({ variants }) {
  return (
    <div style={styles.container}>
      {variants.map((variant) => (
        <div key={variant.sku} style={styles.variant}>
          <span>{variant.color}</span>

          <span
            style={{
              color: variant.stock > 10 ? "green" : "red",
              fontWeight: "bold"
            }}
          >
            {variant.stock} left
          </span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "10px"
  },

  variant: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    borderBottom: "1px solid #eee",
    fontSize: "14px"
  }
};

export default VariantList;