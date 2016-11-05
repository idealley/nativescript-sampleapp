<<<<<<< HEAD
import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
  AuthGuard
];

export const appRoutes = [
  { path: "", redirectTo: "/groceries", pathMatch: "full" }
];
=======
import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent
];
>>>>>>> angular-start
