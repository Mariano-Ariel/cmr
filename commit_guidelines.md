# Commit Message Guidelines

Nomenclature convention based on Conventional Commits.

## Basic Format

- **type**: indicates the nature of the change  
  - `feat`: new feature  
  - `fix`: bug fix  
  - `docs`: documentation changes  
  - `style`: formatting and styling (CSS, indentation, no logic changes)  
  - `refactor`: internal restructuring without new features  
  - `perf`: performance improvements  
  - `test`: tests (unit, integration)  
  - `chore`: maintenance tasks (configuration, dependencies)

- **scope** *(optional)*: the affected folder or module, for example `frontend`, `backend`, `clients`, `sidebar`.

- **short description**: imperative tense, no trailing period, e.g. `add API call`.

## Examples

- `feat(clients): add API call to fetch clients`  
- `fix(sidebar): correct active NavLink on /clients/view`  
- `docs: update README with installation instructions`  
- `style(login): make inputs and button full-width in Login.module.css`  
- `refactor(api): move requests to src/api/clients.js`  
- `chore: update backend dependencies`

---