import React, { useState, useEffect, useRef } from "react";
import { httpService } from "../httpService";
import { Button, Typography } from "@mui/material";
import { Badge, Table } from "react-bootstrap";
import logo from "./logo.png";
import ReactToPrint from "react-to-print";

export default function AttendanceSummary() {
  const [results, setResults] = useState([]);

  const getData = async () => {
    const { data } = await httpService("attendance");
    if (data) {
      setResults(data);
    }
  };

  const componentRef = useRef();
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="p-3" ref={componentRef}>
        <div className="text-center">
          <img className="img-fluid" src={logo} height={100} width={120} />
          <Typography variant="h4" fontWeight={700}>
            JAMB POLICY MEETING 2022 REGISTRATION LIST
          </Typography>
        </div>

        <div className="mt-4">
          {results.map((c, i) => (
            <div key={i}>
              <div>
                <Typography fontWeight={700} color={"GrayText"}>
                  {i + 1}. {c.institution}
                </Typography>
                <Badge>{c.code}</Badge>
                <div className="mt-2">
                  <Table striped borderless>
                    <thead>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                    </thead>
                    <tbody>
                      {c.participants.map((d, j) => (
                        <tr>
                          <td className="col-lg-1">{j + 1}</td>
                          <td className="col-lg-4">
                            <Typography>{d.name}</Typography>
                          </td>
                          <td className="col-lg-2">
                            <Typography>{d.role}</Typography>
                          </td>
                          <td className="col-lg-4">
                            <Typography>{d.email}</Typography>
                          </td>
                          <td className="col-lg-1">
                            <Typography>{d.phoneNumber}</Typography>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <ReactToPrint
        trigger={() => {
          return <Button variant="contained"> print slip</Button>;
        }}
        content={() => componentRef.current}
      />
    </div>
  );
}
