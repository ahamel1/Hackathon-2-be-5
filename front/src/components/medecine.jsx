import React from 'react';
import { Button } from 'reactstrap';
import styles from './medecine.module.css';

class Medecine extends React.Component {
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
        <p>Tell me when remains</p>
        <p className={styles.p}>{count}</p>

        <div className={styles.main}>
          <Button
            type="button"
            class="btn btn-success btn-number"
            color="info"
            onClick={this.handleDecrement}
          >
            -
          </Button>

          <hr className={styles.line} />

          <Button
            type="button"
            class="btn btn-success btn-number"
            color="info"
            onClick={this.handleIncrement}
          >
            +
          </Button>
        </div>
        <p>pills</p>
      </div>
    );
  }
}

export default Medecine;
