# Application To-Do List

Une application To-Do List réalisée avec TypeScript et Supabase. Cette application permet de :
- S'inscrire et se connecter
- Ajouter des tâches avec un titre, une description, une date limite et une couleur
- Modifier l'état des tâches (les marquer comme terminées)
- Supprimer des tâches (sauf celles terminées)
- Afficher les tâches sous forme de blocs organisés

## **Installation**

**Installer les dépendances :**
```bash
npm install
```

**Configurer l'accès à Supabase :**  
Modifiez le fichier `init.ts` avec vos clés Supabase :  
```typescript
SUPABASE_URL=<URL_DE_VOTRE_PROJET_SUPABASE>
SUPABASE_KEY=<CLÉ_ANONYME>
```

**Compiler les fichiers TypeScript :**
```bash
npm run dev
```

---

## **Créer les Tables dans Supabase**

Dans Supabase, accédez à la section **SQL Editor** et exécutez les requêtes suivantes pour créer les tables nécessaires.

### **Table `tasks`**
```sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  deadline DATE NOT NULL,
  color TEXT DEFAULT '#FFFFFF',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **Autorisations Nécessaires**

```sql
CREATE POLICY "Allow logged-in users"
ON public.tasks
FOR SELECT
USING (auth.uid() = user_id);
FOR INSERT
WITH CHECK (auth.uid() = user_id);
FOR UPDATE
USING (auth.uid() = user_id);
FOR DELETE
USING (auth.uid() = user_id);
```

---

## **Exécution du Projet**

**Lancer un serveur local :**  
Utilisez un serveur comme `Live Server` pour lire les fichiers HTML et JS dans un navigateur.

**Utiliser l'application :**  
Inscrivez-vous ou connectez-vous pour commencer à gérer vos tâches.

---

## **Consignes de l'Exercice**  
Pour plus de détails sur les consignes et les attentes de l'exercice, consultez le lien suivant :  
[Consignes de l'exercice - IIM A2CDI](https://docs.yoanncoualan.com/typescript/evaluations/iim-a2cdi)

---

## **Auteur**  
- **Nom :**[Victor Fernel](https://github.com/Wicoco/)  