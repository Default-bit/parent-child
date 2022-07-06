import "bootstrap/dist/css/bootstrap.min.css";

export const Children = () => {
  return (
    <>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age(dob)</th>
              <th scope="col">Email</th>
              <th scope="col">Interests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Alisher</td>
              <td>17</td>
              <td>sample@gmail.com</td>
              <td>volleyball, swimming, hiking</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Miko</td>
              <td>12</td>
              <td>sample@gmail.com</td>
              <td>tennis, math, drawing</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Aidai</td>
              <td>6</td>
              <td>sample@gmail.com</td>
              <td>chess, uno</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
