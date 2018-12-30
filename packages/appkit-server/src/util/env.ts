/**
 * retrieve a JSON config environment variable, parse it, and return it
 */
export function getServerConfigEnvVar(envVarName: string): Object {
  try {
    const varJson = process.env[envVarName];
    if (varJson == null) {
      throw new Error(`environment variable name ${envVarName} doesn't exist`);
    }

    try {
      const obj = JSON.parse(varJson) as Object;
      return obj;
    } catch (err) {
      throw new Error(`Error parsing environment variable JSON ${varJson} `);
    }
  } catch (err) {
    throw new Error(`Error getting environment variable ${envVarName} `);
  }
}

export function inProduction(): boolean {
  const env = process.env.NODE_ENV;
  if (env == null) {
    return false;
  }

  return env.toLowerCase().substr(0, 3) === "dev";
}
