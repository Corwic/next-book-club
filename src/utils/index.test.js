import React from "react";
import { capFirstLetter } from "./index";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

describe('Ha', () => {
  it('Should capitalise first letter', () => {
    expect(capFirstLetter('jojo')).toEqual(expect.stringContaining('Jo'));
    //expect('1').toEqual(expect('1'));
  });
})
