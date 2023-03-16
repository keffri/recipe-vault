import React, { FC } from 'react';

type Recipe = {
  name: string;
  course: string;
  cuisine: string;
  diet: string;
  tags: string[];
  prep_time: number;
  cook_time: number;
  total_time: number;
  serves: number;
  ingredients: string[];
  instructions: string[];
  notes: string[];
  link: string;
};

const Create: FC = () => {
  return (
    <section className="create">
      <h1 className="create__title">Create</h1>
    </section>
  );
};

export default Create;
