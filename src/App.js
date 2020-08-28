import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }

  }

  componentDidMount() {
    const url = "http://ec2-107-22-130-1.compute-1.amazonaws.com:5000/api/test";
     fetch(url, {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     }).then(response => response.json()).then(posts => {
       console.log("posts", posts);
       this.setState({posts: posts.recordset})
     })
   }


  render() {
    const data = this.state.posts;
    const columns = [
      {
        Header: "Group Code",
        accessor:"group_code"
      },
      {
        Header: "Group Name",
        accessor:"group_name"
      },
      {
        Header: "Class Name",
        accessor:"class_name"
      },
      {
        Header: "Function Name",
        accessor:"function_name"
      },
      {
        Header: "Error Description",
        accessor:"error_description"
      },
      {
        Header: "Time Stamp",
        accessor:"timestamp"
      },
      {
        Header: "Number at Line",
        accessor:"number_at_line"
      },
      {
        Header: "Order Type",
        accessor:"order_type"
      },
      {
        Header: "Order Id",
        accessor:"order_id"
      },
      {
        Header: "Side",
        accessor:"side"
      },
      {
        Header: "Stop Loss",
        accessor:"stop_loss"
      },
      {
        Header: "Take Profit",
        accessor:"take_profit"
      },
      {
        Header: "Ask Price",
        accessor:"ask_price"
      },
      {
        Header: "Bid Price",
        accessor:"bid_price"
      },
      {
        Header: "Last Price",
        accessor:"last_price"
      },
      {
        Header: "Time of Last Quote",
        accessor:"last_quote_time"
      },
      {
        Header: "Close Price",
        accessor:"close_price"
      },
      {
        Header: "Session Id",
        accessor:"session_id"
      },
      {
        Header: "User Id",
        accessor:"session_id"
      },
      {
        Header: "User Name",
        accessor:"user_name"
      }
    ]
    return (
      <ReactTable
        columns={columns}
        data={data}
      >
      </ReactTable>
    );
  }
  
}


export default App;
