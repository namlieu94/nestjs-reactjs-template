/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpStatusCodes } from './http-status-codes';
import { logger } from '../loggers';
import axios, { AxiosError } from 'axios';
import { isBoolean } from 'lodash';
export class ErrorHandler extends Error {
  statusCode = 200;
  message = 'Something went wrong';
  details: unknown = {};
  config: unknown = {};
  isLogger = true;

  constructor(
    statusCode: httpStatusCodes,
    message: string,
    details?: any,
    isLogger?: boolean,
  ) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.isLogger = isBoolean(isLogger) ? isLogger : true;
    this.handleError(details);
  }

  private handleAxiosError(error: AxiosError): void {
    this.details = error?.response?.data || error?.response || error || {};
    this.config = JSON.stringify(error?.config);
  }

  private handleError(error: any): void {
    if (axios.isAxiosError(error)) this.handleAxiosError(error);
    else this.details = JSON.stringify(error);
    if (this.isLogger) logger.error(this.message, this.details);
  }
}
