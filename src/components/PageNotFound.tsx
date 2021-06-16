import { Redirect } from 'react-router-dom';
import { FC } from 'react';

type PropsType = {
  scheduleError: boolean;
};

export const PageNotFound: FC<PropsType> = (scheduleError) =>
  scheduleError ? <h1>404. Page not found</h1> : <Redirect to="/" />;
