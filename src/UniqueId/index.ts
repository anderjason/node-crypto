import { stringOfUuid } from "./_internal/stringOfUuid";

export class UniqueId {
  static ofRandomUuid(): UniqueId {
    return new UniqueId(stringOfUuid());
  }

  private _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  toString(): string {
    return this._value;
  }
}
