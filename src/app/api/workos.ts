import { WorkOS, type WorkOS as IWorkOS } from '@workos-inc/node';
import { env } from '@/env'

export const workos: IWorkOS = new WorkOS(env.WORKOS_API_KEY, {
  clientId: env.WORKOS_CLIENT_ID,
});