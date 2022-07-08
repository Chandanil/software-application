import { EmailList } from "../EmailList/EmailList";
import "./Table.scss";
export const Table = () => {
  const data = [
    {
      name: "Chandani lama",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "loan",
      status: "active",
    },
    {
      name: "Sunita Bagale",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Withdraw",
      status: "active",
    },
    {
      name: "Krishna Thapa",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Deposit",
      status: "active",
    },
    {
      name: "Chandani lama",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "loan",
      status: "active",
    },
    {
      name: "Sunita Bagale",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Withdraw",
      status: "active",
    },
    {
      name: "Krishna Thapa",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Deposit",
      status: "active",
    },
        {
      name: "Chandani lama",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "loan",
      status: "active",
    },
    {
      name: "Sunita Bagale",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Withdraw",
      status: "active",
    },
    {
      name: "Krishna Thapa",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Deposit",
      status: "active",
    },
    {
      name: "Chandani lama",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "loan",
      status: "active",
    },
    {
      name: "Sunita Bagale",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Withdraw",
      status: "active",
    },
    {
      name: "Krishna Thapa",
      amount: "Rs.3250.00",
      savingAmount: 65232.0,
      transaction: "Deposit",
      status: "active",
    },
  ];
  return (
    <>
      <div className="body-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="cl-table cl-scroll">
                <div className="cl-header">
                  <h5 className="title">Transaction Status</h5>
                  <span>02 Nov 2021 to 31 Dec 2021</span>
                </div>
                <table className=" table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Saving Amount</th>
                      <th>Transaction</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.amount}</td>
                          <td>{item.savingAmount}</td>
                          <td className="text-center">
                            <span className="trans-btn">
                              {item.transaction}
                            </span>
                          </td>
                          <td>{item.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <EmailList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
