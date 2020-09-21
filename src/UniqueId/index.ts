import { stringOfUuid } from "./_internal/stringOfUuid";

const regex = /^([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}){1}$/;

export class UniqueId {
  static ofRandom(): UniqueId {
    return new UniqueId(stringOfUuid());
  }

  static givenUUIDString(uuid: string): UniqueId {
    if (uuid == null) {
      throw new Error("UUID is required");
    }

    if (!regex.test(uuid)) {
      throw new Error("Invalid UUID string");
    }

    return new UniqueId(uuid);
  }

  static isEqual(a: UniqueId, b: UniqueId): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  private _uuid: string;

  private constructor(uuid: string) {
    this._uuid = uuid;
  }

  isEqual(other: UniqueId): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof UniqueId)) {
      return false;
    }

    return this._uuid === other._uuid;
  }

  toUUIDString(): string {
    return this._uuid;
  }
}
