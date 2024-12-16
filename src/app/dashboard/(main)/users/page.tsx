"use server"
import Container from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import UsersManagement from "./_components/UserManagement";
import { withAuth } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";


export default async function UsersPage(){
    const { role } = await withAuth({ ensureSignedIn: true});
    if (role !== 'admin')
        redirect('dashboard')
    return (
        <Container>
            <Title className="mb-8">
                Users
            </Title>
            <UsersManagement  />
        </Container>
    )
}