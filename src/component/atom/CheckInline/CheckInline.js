import Form from "react-bootstrap/Form";

function CheckInline() {
  return (
    <Form>
      {["radio"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Stok Yonetimi"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Musteri Yonetimi"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Finans Yonetimi"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckInline;
