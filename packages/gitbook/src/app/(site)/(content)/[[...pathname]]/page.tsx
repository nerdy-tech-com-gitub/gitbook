import { getOllamaData } from '@/lib/api';

export default async function Page(props: { children: React.ReactNode }) {
    const { children } = props;

    const ollamaData = await getOllamaData();

    // Use the fetched data to rewrite blog posts and do SEO onsite and keywording
    // This is a placeholder for the actual implementation
    console.log('Ollama Data:', ollamaData);

    return <>{children}</>;
}
