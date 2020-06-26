import React from 'react';
import { Button } from 'reactstrap';
import styles from './medecine.module.css';

class TimeLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  handleDecrement() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className={styles.container}>
        <p className={styles.p}>Notify me when </p>
        <p className={styles.p}>{count}</p>

        <div className={styles.main}>
          <Button
            type="button"
            className={styles.button}
            onClick={this.handleDecrement}
          >
            -
          </Button>

          <hr className={styles.line} />

          <Button
            type="button"
            onClick={this.handleIncrement}
            className={styles.button}
          >
            +
          </Button>
        </div>
        <p className={styles.p}>minutes before intake</p>
      </div>
    );
  }
}

export default TimeLeft;
