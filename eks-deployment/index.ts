import * as eks from "@pulumi/eks";

// Create an EKS cluster with the default configuration.
const cluster = new eks.Cluster("eks-for-tekton", {
    desiredCapacity: 3,
    minSize: 3,
    maxSize: 4,
});

// Export the cluster's kubeconfig.
export const kubeconfig = cluster.kubeconfig;
export const eksUrl = cluster.eksCluster.endpoint;
export const clusterName = cluster.eksCluster.name;
