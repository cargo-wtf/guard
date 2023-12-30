import type { RequestContext } from "cargo/http/request.ts";
import type { Instructions, Strategy } from "../guard.ts";

export class CustomStrategy<T> implements Strategy<T> {
  name = "custom";

  constructor(
    private handler: (
      ctx: RequestContext,
      instructions: Instructions<T>,
    ) => void,
  ) {}

  authenticate(ctx: RequestContext, { allow, deny }: Instructions<T>) {
    this.handler(ctx, { allow, deny });
  }
}
