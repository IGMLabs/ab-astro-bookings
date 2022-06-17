# CLI journal

```
ng new angular-intro --routing true --style css

npm install @picocss/pico

```

## 1. Templates

## 2. Modules

```bash
ng g m core
ng g c core/header --export
ng g c core/title

ng g c core/footer --export

ng g m shared
ng g c shared/reloading --export
```

## 3. Router

```bash
ng g m about --route=about --module=app

ng g m contact --route=contact --module=app
ng g c contact --type=page

ng g m auth/register --route=auth/register -m=app
ng g c auth/register --type=page

ng g m auth/login --route=auth/login --module=app
ng g c auth/login --type=page

ng g m agencies --route=agencies --module=app
ng g c agencies --type=page
ng g c shared/components/agencies --export --type=list

ng g m trips --route=trips --module=app
ng g c trips --type=page
ng g c shared/components/trips --export --type=list

ng g m agencies/agency --module=agencies --route=agency/:id
ng g c agencies/agency --type=page


ng g m trips/trip --m=trips --route=trip/:id
ng g c trips/trip --type=page
```

## 4. Forms

```bash
ng g c contact --type=form
ng g c auth/register --type=form

ng g m agencies/new-agency --module=agencies --route=agency/new
ng g c agencies/new-agency --type=page
ng g c agencies/new-agency --type=form


ng g c auth/login --type=form

ng g m trips/new-trip --module=trips --route=trip/new
ng g c trips/new-trip --type=page
ng g c trips/new-trip --type=form

```

## 5. Services

```bash

ng g s core/forms/form-validations
ng g s core/forms/form-messages
ng g s core/utils/transformations

ng g class core/forms/form --type=base

ng g i core/api/agency --type=interface
ng g i core/api/id-name --type=interface
```

## 6. Containers

```bash
ng g c agencies/agency --type=view
```

## 7. Http

```bash
npm i -D json-server json-server-auth
npm run api

```

## 8. Pro

```bash
ng g class core/api/crud --type=api
```

## 9. Practice

## 10. Forms CVA

```bash

ng g c shared/controls/email --type=control --export
ng g c shared/controls/template --type=control --export
ng g c shared/controls/search --type=control --export
```

## 11. Pro

## 12. Auth

```
ng g class auth/api/auth --type=api
ng g i auth/api/register --type=interface
ng g i auth/api/login --type=interface

ng g interceptor core/api/error
ng g interceptor auth/api/auth


ng g guard auth/api/authenticated --implements CanLoad
ng g class core/utils/storage --type=base

```
