import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import AOS from "aos";

import Navbar from "../components/Navbar";
import bgCircles from "../assets/images/bg-circles.png";
import "aos/dist/aos.css";

const firebaseConfig = {
  apiKey: "AIzaSyB-Ayq5Cnpb3K80ronzCfmjLYS3o8TxvP0",
  authDomain: "phoenix-c9d8e.firebaseapp.com",
  databaseURL:
    "https://phoenix-c9d8e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "phoenix-c9d8e",
  storageBucket: "phoenix-c9d8e.appspot.com",
  messagingSenderId: "145048109067",
  appId: "1:145048109067:web:700cc6b73d5f75743a070e",
};
initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());

interface Props {
  enableFunction: (isEnabled: boolean) => void;
}

const PastRecordsPage = ({ enableFunction }: Props) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        window.location.replace("/login");
        enableFunction(false);
      } else {
        enableFunction(true);
      }
    } else {
      window.location.replace("/login");
    }
  }, []);

  useEffect(() => {
    get(child(dbRef, `entity`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEntries(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar active="past-records" />
      </header>
      <main>
        <img
          src={bgCircles}
          alt="Blurred background"
          className="bg-height absolute right-0 top-0 -z-10"
        />
        <div className="section-min-height flex flex-col justify-center">
          <h1
            className="pb-10 font-outfit text-6xl font-bold"
            data-aos="fade-right"
          >
            Past Records
          </h1>
          <p
            className="pb-10 font-roboto font-light"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Welcome to the Past Records section. Here, you can access detailed
            logs of all creatures detected by our advanced livestock monitoring
            drone. Each record includes the date and time of detection, along
            with the category of the animal—be it livestock, predator, or avian.
            <br />
            <br />
            Below, you’ll find a detailed list of all detected creatures,
            organized by date and category. Use this information to monitor
            trends, assess risks, and maintain the security of your farmland.
          </p>
          {/* <ul>
            {entries.map((entry) => (
              <li>{entry.time}</li>
            ))}
          </ul> */}
          <div className="custom-scrollbar h-[30vh] w-full overflow-y-scroll">
            <table className="w-[99%] text-left font-roboto font-light">
              <thead>
                <tr>
                  <th className="border border-primary border-opacity-20 pb-2 ps-4 pt-1.5 font-outfit">
                    Entity Type
                  </th>
                  <th className="border border-primary border-opacity-20 pb-2 ps-4 pt-1.5 font-outfit">
                    Entry Date
                  </th>
                  <th className="border border-primary border-opacity-20 pb-2 ps-4 pt-1.5 font-outfit">
                    Entry Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {entries.map(({ date, time, type }) => (
                  <tr>
                    <td className="border border-primary border-opacity-20 pb-2 ps-4 pt-1.5">
                      {type}
                    </td>
                    <td className="border border-primary border-opacity-20 pb-2 ps-4 pt-1.5">
                      {date}
                    </td>
                    <td className="border border-primary border-opacity-20 pb-2 ps-4 pt-1.5">
                      {time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default PastRecordsPage;
