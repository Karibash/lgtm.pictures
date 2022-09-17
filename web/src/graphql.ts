import {
  generateQueryOp,
  generateMutationOp,
  QueryRequest,
  QueryResult,
  MutationRequest,
  MutationResult,
} from '@lgtm/graphql/genql';
import { NextComponentType, NextPage } from 'next';
import { NextUrqlContext, WithUrqlProps, withUrqlClient } from 'next-urql';
import NextApp from 'next/app';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { OperationContext, RequestPolicy, useQuery, useMutation } from 'urql';

export const withGraphQL = <C extends NextPage<any, any> | typeof NextApp>(
  AppOrPage: C,
): NextComponentType<NextUrqlContext, Record<string, unknown>, WithUrqlProps> => {
  return withUrqlClient(() => ({
    url: process.env.NEXT_PUBLIC_API_URL!,
  }))(AppOrPage);
};

export const useTypedQuery = <Query extends QueryRequest>(opts: {
  query: Query;
  requestPolicy?: RequestPolicy;
  context?: Partial<OperationContext>;
  pause?: boolean;
}) => {
  const { query, variables } = useMemo(() => generateQueryOp(opts.query), [opts.query]);
  return useQuery<QueryResult<Query>>({
    ...opts,
    query,
    variables,
  });
};

export const useTypedMutation = <
  Variables extends Record<string, unknown>,
  Mutation extends MutationRequest,
>(builder: (vars: Variables) => Mutation) => {
  const [mutation, setMutation] = useState<string>();
  const [variables, setVariables] = useState<Variables>();
  const [result, execute] = useMutation<MutationResult<Mutation>, Variables>(mutation ?? '');

  const executeWrapper = useCallback((vars: Variables) => {
    const mut = builder(vars);
    const { query, variables } = generateMutationOp(mut);
    setMutation(query);
    setVariables(variables as Variables);
  }, [builder]);

  useEffect(() => {
    if (!mutation || !variables) return;
    void execute(variables).then(() => setMutation(undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation]);

  return [result, executeWrapper] as const;
};
