import React from "react";
import styles from "./Result.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const Result = () => {
  return (
    <div>
      <div className={styles.ResultWrapper}>
        <Link style={{textDecoration:"none", color:"gray"}} to={"/"}>
          <div className={styles.CloseButton}>
            <CloseIcon />
          </div>
        </Link>

        <div className={styles.WordHero}>
          <h1>Piecemeal</h1>
        </div>

        <div className={styles.meaningWrapper}>
          <div className={styles.origin}>
            <p>adjective</p>
            <p style={{ fontSize: "14px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              perferendis sequi consequatur eligendi nobis quidem in similique,
              natus quo nemo?
            </p>
          </div>

          <div className={styles.meaning}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              error itaque unde veniam numquam doloremque ducimus!
            </p>
          </div>

          <div className={styles.sentences}>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
        </div>

        <div className={styles.meaningWrapper}>
          <div className={styles.origin}>
            <p>adjective</p>
            <p style={{ fontSize: "14px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              perferendis sequi consequatur eligendi nobis quidem in similique,
              natus quo nemo?
            </p>
          </div>

          <div className={styles.meaning}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              error itaque unde veniam numquam doloremque ducimus!
            </p>
          </div>

          <div className={styles.sentences}>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
