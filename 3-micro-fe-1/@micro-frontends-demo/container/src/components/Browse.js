import { MicroFrontend } from '../core/micro-frontend';

export const Browse = ({history}) => (
  <MicroFrontend history={history} name="Browse" host={browseHost} />
);