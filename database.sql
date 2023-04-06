-- Active: 1680788638050@@127.0.0.1@3306

/*Tablea Usuários*/

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        username TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TEXT DEFAULT (
            strftime(
                '%Y-%m-%d %H:%M:%S',
                'now',
                'localtime'
            )
        ) NOT NULL
    );

/**/

/* Tabela de Perfis de Usuários */

CREATE TABLE
    user_profiles (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        user_id TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        address TEXT,
        phone_number TEXT,
        bio TEXT,
        skills TEXT,
        image TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

SELECT * FROM user_profiles;

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
        created_at TEXT DEFAULT (
            strftime(
                '%Y-%m-%d %H:%M:%S',
                'now',
                'localtime'
            )
        ) NOT NULL
    );

SELECT * FROM companies;

/* Tabela de Profissões */

CREATE TABLE
    professions (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT UNIQUE NOT NULL,
        image TEXT
    );

DROP TABLE professions;

/* Tabela de Profissões dos Usuários */

CREATE TABLE
    user_professions (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        user_id TEXT NOT NULL,
        profession_id TEXT NOT NULL,
        experience_years TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
        FOREIGN KEY (profession_id) REFERENCES professions(id) ON DELETE CASCADE ON UPDATE CASCADE
    );

DROP TABLE user_professions;

/*Vagas de Emprego*/

CREATE TABLE
    work_vacancies (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        company_id TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        skills_required TEXT,
        location TEXT NOT NULL,
        salary FLOAT NOT NULL,
        created_at TEXT DEFAULT (
            strftime(
                '%Y-%m-%d %H:%M:%S',
                'now',
                'localtime'
            )
        ) NOT NULL,
        FOREIGN KEY (company_id) REFERENCES companies(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
    );

/*Pessoa interessada na vaga*/

CREATE TABLE
    user_work_vacancies (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        userProfileId TEXT NOT NULL,
        work_vacancy_id TEXT NOT NULL,
        chosen NUMBER NOT NULL,
        applied_at TEXT DEFAULT (
            strftime(
                '%Y-%m-%d %H:%M:%S',
                'now',
                'localtime'
            )
        ) NOT NULL,
        FOREIGN KEY (userProfileId) REFERENCES user_profiles(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
        FOREIGN KEY (work_vacancy_id) REFERENCES work_vacancies(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
    );

DROP TABLE user_work_vacancies;

DROP TABLE work_vacancies;

SELECT * FROM user_profiles;
SELECT * FROM user_professions;