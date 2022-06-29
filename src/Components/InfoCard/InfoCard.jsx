import "./InfoCard.scss";
export const InfoCard = () => {
  const data = [
    {
      title: "Loans disbrused",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-thumbs-up"></i>,
    },
    {
      title: "Interest Collected  ",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-usd"></i>,
    },
    {
      title: "Total Saving ",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-money"></i>,
    },
    {
      title: "Fixed Deposit ",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-percent"></i>,
    },
    {
      title: "Active Member",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-users"></i>,
    },
    {
      title: "Exoenditure",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-minus-circle"></i>,
    },
    {
      title: "Profit",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-user-md"></i>,
    },
    {
      title: "Bad Loan",
      percent: "70.23% Loan",
      RS: "Rs.59481.25",
      icon: <i className="fa fa-times-circle"></i>,
    },
  ];
  return (
    <>
      <div className="info-card">
        <div className="container-fluid">
          <div className="row">
            {data?.map((item, index) => {
              return (
                <div className="col-md-3">
                  <div className="card-body">
                    <div className="card-title">
                      <p className="title">{item.title}</p>
                      <span className="percent">{item.percent}</span>
                    </div>
                    <div className="card-content">
                      <div className="left-content">
                        <h2 className="title">{item.RS}</h2>
                        <a href="" className="view-btn">
                          View all loan details
                        </a>
                      </div>
                      <div className="icon">{item.icon}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
