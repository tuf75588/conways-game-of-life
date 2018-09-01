import { expect } from 'chai';
import Cell from '../Cell';

import CellState from '../CellState';

describe('Cell', () => {
  it('Should be initialized with cellState', () => {
    const cell = new Cell(CellState.ALIVE);
    expect(cell.state).to.equal(CellState.ALIVE);

    const deadCell = new Cell(CellState.DEAD);
    expect(deadCell.state).to.equal(CellState.DEAD);
  });
  it('Should die if it has fewer than 2 live neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith0Neighbors = cell.getNextState(0);
    expect(nextStateWith0Neighbors).to.equal(CellState.DEAD);
   
    const nextStateWith1Neighbor = cell.getNextState(1);
    expect(nextStateWith1Neighbor).to.equal(CellState.DEAD);
  });

  it('Should stay dead with more than 3 neighbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith4Neighbors = cell.getNextState(4);
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

    const nextStateWith5Neighbors = cell.getNextState(5);
    expect(nextStateWith5Neighbors).to.equal(CellState.DEAD);
});

  it('Should stay dead if it has fewer than 2 live neighbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith0Neighbors = cell.getNextState(0);
    expect(nextStateWith0Neighbors).to.equal(CellState.DEAD);
   
    const nextStateWith1Neighbor = cell.getNextState(1);
    expect(nextStateWith1Neighbor).to.equal(CellState.DEAD);
  });

  it('Should live with 2 or 3 live neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith2Neighbors = cell.getNextState(2);
    expect(nextStateWith2Neighbors).to.equal(CellState.ALIVE);

    const nextStateWith3Neighbors = cell.getNextState(3);
    expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE);
  });
  it('Should die with more than 3 neighbors', () => {
    const cell = new Cell(CellState.ALIVE);
    const nextStateWith4Neighbors = cell.getNextState(4);
    expect(nextStateWith4Neighbors).to.equal(CellState.DEAD);

    const nextStateWith5Neighbors = cell.getNextState(5);
    expect(nextStateWith5Neighbors).to.equal(CellState.DEAD);
  });

  it('Should come alive with exactly 3 neighbors', () => {
    const cell = new Cell(CellState.DEAD);
    const nextStateWith3Neighbors = cell.getNextState(3);
    expect(nextStateWith3Neighbors).to.equal(CellState.ALIVE);
  });
});
