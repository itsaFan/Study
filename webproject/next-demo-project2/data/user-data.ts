import { IncomingMessage, ServerResponse } from "http";

export type userProps = {
  username: string;
};

export type UserServerContext = {
  params: {
    uid: string;
  };
  req: IncomingMessage;
  res: ServerResponse;
};

export interface UserIdPageProps {
    id: string;
  }

