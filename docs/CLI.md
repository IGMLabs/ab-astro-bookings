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

```
