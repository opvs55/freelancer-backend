-- Active: 1679612139820@@127.0.0.1@3306




/*Tablea Usuários*/
CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        username TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        cellphone TEXT NOT NULL,
        address TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        skills TEXT,
        image TEXT,
        create_at TEXT DEFAULT(DATETIME()) NOT NULL
    );
/**/



/*Tablea Empresa*/
CREATE TABLE
    companies (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        cellphone TEXT NOT NULL,
        address TEXT NOT NULL,
        description TEXT,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        image TEXT,
        create_at TEXT DEFAULT (DATETIME()) NOT NULL
);

DROP TABLE companies;


/*Profisão do usuário*/
CREATE TABLE
    user_professions (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        user_id TEXT NOT NULL,
        profession TEXT NOT NULL,
        experience_years INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
    );


/*Vagas de Emprego*/
    CREATE TABLE 
        job_vacancies (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        company_id TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        skills_required TEXT,
        location TEXT NOT NULL,
        salary FLOAT NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL,
        FOREIGN KEY (company_id) REFERENCES companies(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);



/*Pessoa interessada na vaga*/
    CREATE TABLE 
        user_job_vacancies (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        user_id TEXT NOT NULL,
        job_vacancy_id TEXT NOT NULL,
        companies_id TEXT NOT NULL,
        applied_at TEXT DEFAULT (DATETIME()) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
        FOREIGN KEY (job_vacancy_id) REFERENCES job_vacancies(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
        Foreign Key (companies_id) REFERENCES companies(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);






ALTER TABLE users ADD skills TEXT;
ALTER TABLE job_vacancies ADD skills_required TEXT;

