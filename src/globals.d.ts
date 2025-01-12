// Étendre l’interface globale de Windows
interface Window {
  supabase: {
    createClient: (url: string, key: string) => any;
  };
}
