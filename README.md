


# AppConfigValidator

AppConfigValidator is a React component package designed to ensure that essential environment variables are properly set before the application runs. It enhances application reliability by validating configuration settings at startup and displaying a clear error page if any required variables are missing or improperly configured.

### Features

- Environment Variable Validation: Validates the presence of required environment variables.

- Error Page Display: Displays a user-friendly error page listing missing or invalid environment variables.

### Installation

Install the package using npm:

```bash
npm i appconfigvalidator          
```



## Usage/Examples

```javascript
import React from 'react';
import {AppConfigValidator} from "appConfigValidator";


const RootLayout: React.FC = ({ children }) => {
  const requiredVariables = [
    'NEXT_PUBLIC_API_URL',
    'NEXT_PUBLIC_AUTH_TOKEN',
    'NEXT_PUBLIC_ANALYTICS_ID',
  ];

  return (
    <AppConfigValidator requiredVariables={requiredVariables}>
      {children}
    </AppConfigValidator>
  );
};

export default RootLayout;
```
