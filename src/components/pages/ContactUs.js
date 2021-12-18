import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="container">
      <div>
        <p></p>
        <Card width="30%">
          <Card.Header>Contact Us</Card.Header>
          <Card.Body>
            <Card.Title>Tanva Taemthong</Card.Title>
            <Card.Text>
              ชื่อเล่น "ม่อน" ชื่อในเกม Munoom00
              <li className="mt-3">
                วิชาที่ชอบเรียน HTML และ Code งานที่อยากทำตือ Web devalop
              </li>
              <li className="mt-3">งานอติเรก ดูหนัง ฟังเพลง อ่านมังงะ</li>
              <li className="mt-3">สามารถเล่นเกมได้ทุกวัน</li>
            </Card.Text>
            <p>For my github visit link below.</p>
            <Button href="https://github.com/Munoom00" variant="outline-dark">
              <BsGithub /> Click here
            </Button>
            <p></p>
            <p>Contact me : ta.tanva_st@tni.ac.th</p>
          </Card.Body>
        </Card>
        <p></p>
      </div>
    </div>
  );
};

export default ContactUs;
