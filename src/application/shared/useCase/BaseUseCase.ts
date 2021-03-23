import * as applicationStatusCode from "../status/applicationStatusCodes.json";
import resources, { resourceKeys, Resources } from "../locals/messages/index";

export { IResult, Result, IResultT, ResultT } from "result-tsk";
import words, { wordKeys } from "../locals/words/index";
import { Validator } from "validator-tsk";
import mapper, { IMap } from "mapper-tsk";

export class BaseUseCase {
  constructor() {
    this.mapper = mapper;
    this.resources = resources;
    this.words = words;
    this.validator = new Validator(
      resources,
      resourceKeys.SOME_PARAMETERS_ARE_MISSING,
      applicationStatusCode.BAD_REQUEST,
    );
  }

  mapper: IMap;
  validator: Validator;
  resources: Resources;
  words: Resources;
  resourceKeys = resourceKeys;
  wordKeys = wordKeys;
  applicationStatusCode = applicationStatusCode;
}
