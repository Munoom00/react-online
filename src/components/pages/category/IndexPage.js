import React, { useState } from "react";
import { Table, Image, Badge, Spinner, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export default function IndexPage() {
  const history = useHistory();

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      setLoading(true); // เริ่มหมุนติ้วๆตรงนี้
      const resp = await axios.get(
        "https://api.codingthailand.com/api/category"
      );
      // console.log(resp.data)
      setCategory(resp.data);
    } catch (error) {
      // console.log(error.response)
      setError(error);
    } finally {
      setLoading(false); // หยุดตรงนี้ทุกกรณีที่ทำเสร็จว่าว่าจะ try หรือ catch ก็ตาม
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, plese try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Category</h2>
          <Button
            className="mb-3"
            variant="success"
            onClick={() => {
              history.push("/category/create");
            }}
          >
            {" "}
            + Add New Category
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {category.map((c, index) => {
                return (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>
                      <Link to={``}>
                        <Button className="mr-5" variant="primary">
                          Edit <AiFillEdit />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        onClick={async () => {
                          const isConfirm = window.confirm(
                            "Confirm to delete >> " + c.name + "?"
                          );
                          if (isConfirm === true) {
                            const apiUrl = `https://api.codingthailand.com/api/category/${c.id}`;
                            try {
                              console.log(apiUrl);
                              const resp = await axios.delete(apiUrl);
                              alert(resp.data.message);
                              // history.push('/category')
                              window.location.reload();
                            } catch (error) {
                              alert(error);
                            }
                          }
                        }}
                      >
                        Delete <AiFillDelete />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
