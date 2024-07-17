import AuthForm from '@/components/auth-form';

export default async function Home({searchParams}) {

  const formmode=searchParams.mode||'login';
  return <AuthForm mode={formmode} />;
}
