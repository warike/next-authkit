"use server"
import { workos } from '@/app/api/workos';
import { 
    UsersManagement, 
    WorkOsWidgets
 } from '@workos-inc/widgets';
import '@radix-ui/themes/styles.css';
import { get } from 'lodash';
import { withAuth } from '@workos-inc/authkit-nextjs';


export default async function AuthUsersManagement(){
    
    const { user, organizationId } = await withAuth()
    const authToken: string = await workos.widgets.getToken({
            organizationId: organizationId!,
            userId: get(user, "id", ""),
            scopes: ['widgets:users-table:manage'],
    });

    return (
        <WorkOsWidgets>
            <UsersManagement 
                authToken={authToken}
            />
        </WorkOsWidgets>
    )
}