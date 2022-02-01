import React from 'react';
import spinner from '../assets/spinner.gif';

const Spinner = () => {
  return (
    <section>
      <img className="text-center mx-auto mt-32" src={spinner} alt=""/>
    </section>
);
};

export default Spinner;