import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonTable from "./PersonTable";
import PersonDetails from "./PersonDetails";
import PersonCreate from "./PersonCreate";
<<<<<<< HEAD
import getPeople, {getPersonById, createperson, deleteperson} from "../api/peopleapi";
=======
import getPeople from "../api/peopleapi";
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b


class App extends Component {
  state = {
    detailsperson: null,
    createperson: false,
    personList: [],
  };

  componentDidMount() {
    const _this = this;
    getPeople().then((people) => {
      _this.setState({personList: people });
    });
  }

  findPerson = async (id) => {
<<<<<<< HEAD
   /* const people = this.state.personList;
=======
    const people = this.state.personList;
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b
    let foundPerson = null;
    people.forEach((element) => {
      if (element.id === id) {
        foundPerson = element;
      }
    });
<<<<<<< HEAD
    let foundPerson = null;
    getPersonById().then((people) => {
       
        foundPerson = people;
      });
    return foundPerson;*/
    return await getPersonById(id);
=======
    return foundPerson;
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b

  }; //ok

  showPerson = async (id) => {
    const person = await this.findPerson(id);
    if (person != null) {
      this.setState({
        detailsperson: person,
      });
    }
  };//ok


  closeDetails = () => {
    this.setState({
        detailsperson: null,
    });
  };

  

  deletePerson = (id) => {
    const person = this.findPerson(id);
    if (person != null) {
<<<<<<< HEAD
  
   if(deleteperson(id)){
 const people = this.state.personList;
 people.forEach((element) => {
  if (element.id === id) {
  people.pop(element); //change to Splite
  }
});

    //  people.splice(people.indexOf(person), 1);
      this.setState({
        personList: people,
        detailsperson: null,   
      });
   }

=======
      const people = this.state.personList;
      people.splice(people.indexOf(person), 1);
      this.setState({
        personList: people,
        detailsperson: null,
      });
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b
    }
  };

  
<<<<<<< HEAD
  showcreateperson = () => {
=======
  createperson = () => {
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b
    this.setState({
        createperson: true,
    });
  };  //ok

  

  addPerson = async (person) => {
    const personList = this.state.personList;
<<<<<<< HEAD
    /*
=======
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b
    if (personList === null || personList.length < 1) {
      person.id = 1;
    } else {
      const newId =
        personList.reduce((rowPerson, highest) => {
          if (rowPerson.id > highest.id) {
            return rowPerson.id;
          }
          return highest;
        }).id + 1; 
      person.id = newId;
    };
<<<<<<< HEAD
 */
person  = createperson(person);
=======

>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b
    personList.push(person);

    this.setState({
      personList: personList,
      createperson: false,
    });
  };


  closeCreate = () => {
    this.setState({
        createperson: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsperson != null ? (
        <PersonDetails
          person={this.state.detailsperson}
          closeDetails={this.closeDetails}
          deletePerson={this.deletePerson}
        />
      ) : this.state.createperson ? (
        <PersonCreate addPerson={this.addPerson} closeCreate={this.closeCreate} />
      ) : (
        <div>
<<<<<<< HEAD
          <button onClick={this.showcreateperson} className="btn btn-success">
=======
          <button onClick={this.createperson} className="btn btn-success">
>>>>>>> 0fe07416e4f5b15bb2aed1c227ccd609e88a573b
            Add Person
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Person SPA</h3>
          <hr />
          <div className="row">
            <PersonTable people={this.state.personList} showPerson={this.showPerson} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;