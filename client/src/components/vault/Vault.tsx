import React, { FC } from 'react';

interface VaultProps {
  cookies: { [x: string]: any };
}

const Vault: FC<VaultProps> = (props: VaultProps) => {
  return (
    <section className="vault">
      {!props.cookies.AuthToken && (
        <div className="vault__fail">
          <h2 className="vault__fail--center">
            Please log in if you wish to view your recipes.
          </h2>
        </div>
      )}

      {props.cookies.AuthToken && (
        <div className="vault__pass">
          <h1 className="vault__title">Vault</h1>
        </div>
      )}
    </section>
  );
};

export default Vault;
