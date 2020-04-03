import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Container ,
         Card ,
         CardHeader ,
         CardFooter ,
         CardBody ,
         CardTitle ,
         CardText ,
         Row
         } from "reactstrap";

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: [],
        urlApiProvince: "https://api.kawalcorona.com/indonesia/provinsi/",
        isLoading:true,
      }
    }

    componentDidMount(){
      fetch(this.state.urlApiProvince)
        .then(response => response.json())
        .then(data => this.setState({data:data , isLoading:false}));
    }

    render(){
      var { isLoading , data } = this.state;
      if(isLoading){
        return "<h1>loading</h1>";
      }
      return (
      <Container>
          <div className="col-lg-12">
            <h1> Corona virus in indonesia </h1>
            <Row>
            {data.map((d , i) =>
              <div className="col-md-3">
                <Card>
                  <CardHeader>{d.attributes.Provinsi}</CardHeader>
                  <CardBody>
                    <CardTitle>Corona virus in {d.attributes.Provinsi} </CardTitle>
                    <CardText>
                    <ul>
                      <li>Positif: {d.attributes.Kasus_Posi}</li>
                      <li>Sembuh: {d.attributes.Kasus_Semb}</li>
                      <li>Meninggal: {d.attributes.Kasus_Meni}</li>
                    </ul>
                    </CardText>
                  </CardBody>
                  <CardFooter>Footer</CardFooter>
                </Card>
                <br/>
              </div>
              )}
            </Row>
          </div>
      </Container>
    );
  }
}

export default App;
