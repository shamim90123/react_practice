import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from "react-apexcharts";
import { useState } from "react";

import { IconContext } from "react-icons";
import { FaFolder } from "react-icons/fa";

import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { Component } from "react";

// for phone number input
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import Moment from 'react-moment';

const date = new Date();

// line chart data and options
const data = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

const BarChart = {
  options: {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
};

const containerStyle = {
  backgroundColor: "cadetblue",
  height: "100vh"
};

// 
const dateToFormat = '2007-02-03T12:59-0500';


// create a new component called Dashboard
const Dashboard = () => {
  const [value, setValue] = useState()

  return (
    <Container style={containerStyle}>
       <Row style={{ marginTop: 15 }}>
        <Col>
          <Card style={{ width: "18rem", height: 140, backgroundColor: "darkcyan", color: "white" }}>
            <Card.Body>
              <Card.Title>$12.50</Card.Title>
              <Card.Text>
                Potential Gwoth
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem", height: 140, backgroundColor: "darkcyan", color: "white" }}>
            <Card.Body>
              <Card.Title>$12.50</Card.Title>
              <Card.Text>
                Potential Gwoth
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem", height: 140, backgroundColor: "darkcyan", color: "white" }}>
            <Card.Body>
              <Card.Title>$12.50</Card.Title>
              <Card.Text>
                Potential Gwoth
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem", height: 140, backgroundColor: "darkcyan", color: "white" }}>
            <Card.Body>
              <Card.Title>$12.50</Card.Title>
              <Card.Text>
                Potential Gwoth
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       </Row>

       <Row style={{marginTop: 10}}>
        <Col>        
          <Chart
            options={data.options}
            series={data.series}
            type="area"
          />
        </Col>

        <Col>
            <Chart
              options={BarChart.options}
              series={BarChart.series}
              type="bar"
            />
        </Col>

        <Col>
          <Chart
            options={BarChart.options}
            series={BarChart.series}
            type="line"
          />
        </Col>
        
       </Row>

       <Row>
        <Col>
          <Flatpickr
            data-enable-time
            value={date}
            onChange={([date]) => {
              this.setState({ date });
            }}
          />
        </Col>

        <Col>
          <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            <div>
              <FaFolder />
            </div>
          </IconContext.Provider>       
        </Col>

        <Col>
          <PhoneInput
            international
            defaultCountry="BD"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}/>       
        </Col>
        <Col>
            <Moment>{dateToFormat}</Moment> <br />
            <Moment fromNow>1976-04-19T12:59-0500</Moment>
        </Col>
       </Row>

    </Container>
  );
};

export default Dashboard;
