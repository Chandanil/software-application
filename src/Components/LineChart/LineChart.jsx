import { Todo } from "../ToDo/Todo";

export const LineChart = () => {
  return (
    <>
      <div className="body-section">
        <div className="container-fluid">
          <div className="row">
            <div class="col-md-8">
              <div className="linechart">
                <div className="cl-header">
                  <h5 className="title">Balance Overview</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
