import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHistoryAPI } from '../Services/allAPI';

function History() {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await getHistoryAPI();
        setHistoryData(response); // Assuming the response is an array of history items
        setLoading(false);
      } catch (err) {
        setError('Failed to load watch history.');
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h4 className="text-warning m-4">Watch History</h4>
          <Link
            className="text-info m-4 fs-5 text-decoration-none"
            to="/home"
          >
            Back to <i className="fa-solid fa-house"></i>
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th>---</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.caption}</td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.link}
                </a>
              </td>
              <td>{item.date}</td>
              <td>
                <i
                  className="fa-solid fa-trash"
                  style={{ color: '#c91818', cursor: 'pointer' }}
                  onClick={() => console.log('Delete clicked for', item.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default History;
